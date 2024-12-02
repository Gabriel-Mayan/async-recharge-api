import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FormatPhoneNumberPipe implements PipeTransform {
  transform(value: { phone_number?: string }) {
    if (value && value.phone_number) {
      value.phone_number = value.phone_number.trim().startsWith('+')
        ? value.phone_number.trim()
        : `+${value.phone_number.trim()}`;
    }

    return value;
  }
}
