import { Job } from 'bullmq';
import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { RechargeService } from './recharge.service';

@Processor('recharge')
export class RechargeProcessor extends WorkerHost {
  constructor(private readonly rechargeService: RechargeService) {
    super();
  }

  async process(job: Job) {
    switch (job.name) {
      case 'process-recharge':
        await this.handleProcessRecharge(job);
        break;

      default:
        console.error(`Unknow job: ${job.name}`);
        break;
    }
  }

  private async handleProcessRecharge(job: Job) {
    const { recharge_id } = job.data;

    console.log(`Processando recarga: ${recharge_id}...`);

    const sucesso = Math.random() > 0.2;
    const status = sucesso ? 'SUCCESS' : 'FAILED';

    await this.rechargeService.updateRechargeStatus({ recharge_id, status });

    console.log(`Recarga ${recharge_id}: ${status}`);
  }

  @OnWorkerEvent('completed')
  onComplete(job: Job) {
    console.log(`Job ${job.id} finished!!!`);
  }

  @OnWorkerEvent('failed')
  onFailure(job: Job) {
    console.error(`Job ${job.id} faild...`);
  }
}
