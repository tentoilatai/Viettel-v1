export interface Plan {
  id: number;
  name: string;
  price: number;
  period: string;
  data: string;
  call: string;
  sms: string;
  benefits: string[];
  featured?: boolean;
  smsCode: string;
}