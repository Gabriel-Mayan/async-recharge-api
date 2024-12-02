export type IUpdateRechargeStatus = {
  recharge_id: string;
  status: 'SUCCESS' | 'FAILED';
};

export type ICreateRecharge = {
  user_id: string;
  phone_number: string;
  amount: number;
};

export type IUpdateRecharge = {
  recharge_id: string;
  status: 'SUCCESS' | 'FAILED';
};

export type IFindRechargeByUserAndPhone = {
  user_id: string;
  phone_number: string;
};
