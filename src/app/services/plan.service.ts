import { Injectable } from '@angular/core';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private plans: Plan[] = [
    {
      id: 1,
      name: 'V90',
      price: 90000,
      period: 'tháng',
      data: '4GB/ngày',
      call: 'Miễn phí cuộc gọi nội mạng dưới 20 phút',
      sms: '250 SMS',
      benefits: [
        '4GB data tốc độ cao mỗi ngày',
        'Miễn phí cuộc gọi nội mạng dưới 20 phút',
        '250 SMS nội mạng mỗi tháng',
        'Ưu đãi đặc biệt cho dịch vụ Viettel+'
      ],
      featured: true,
      smsCode: 'V90 gửi 9123'
    },
    {
      id: 2,
      name: 'V70',
      price: 70000,
      period: 'tháng',
      data: '2GB/ngày',
      call: 'Miễn phí cuộc gọi nội mạng dưới 10 phút',
      sms: '150 SMS',
      benefits: [
        '2GB data tốc độ cao mỗi ngày',
        'Miễn phí cuộc gọi nội mạng dưới 10 phút',
        '150 SMS nội mạng mỗi tháng',
        'Gói cước phù hợp cho người dùng thông thường'
      ],
      smsCode: 'V70 gửi 9123'
    },
    {
      id: 3,
      name: 'V50',
      price: 50000,
      period: 'tháng',
      data: '1GB/ngày',
      call: '1000 phút gọi miễn phí',
      sms: '100 SMS',
      benefits: [
        '1GB data tốc độ cao mỗi ngày',
        '1000 phút gọi miễn phí nội mạng',
        '100 SMS nội mạng mỗi tháng',
        'Tiết kiệm chi phí cho người dùng ít'
      ],
      smsCode: 'V50 gửi 9123'
    },
    {
      id: 4,
      name: 'V120 PLUS',
      price: 120000,
      period: 'tháng',
      data: '5GB/ngày',
      call: 'Miễn phí cuộc gọi nội mạng và ngoại mạng dưới 20 phút',
      sms: '300 SMS',
      benefits: [
        '5GB data tốc độ cao mỗi ngày',
        'Miễn phí cuộc gọi nội mạng và ngoại mạng dưới 20 phút',
        '300 SMS nội mạng và ngoại mạng mỗi tháng',
        'Ưu đãi đặc biệt cho dịch vụ Viettel+',
        'Xem phim, nghe nhạc không giới hạn'
      ],
      featured: true,
      smsCode: 'V120P gửi 9123'
    },
    {
      id: 5,
      name: 'V150 MAX',
      price: 150000,
      period: 'tháng',
      data: 'Không giới hạn',
      call: 'Miễn phí cuộc gọi dưới 60 phút',
      sms: '500 SMS',
      benefits: [
        'Data 4G/5G không giới hạn',
        'Miễn phí cuộc gọi dưới 60 phút',
        '500 SMS mỗi tháng',
        'Ưu đãi đặc biệt cho dịch vụ Viettel+',
        'Miễn phí xem phim, nghe nhạc'
      ],
      featured: true,
      smsCode: 'V150M gửi 9123'
    },
    {
      id: 6,
      name: 'D30',
      price: 30000,
      period: 'tháng',
      data: '500MB/ngày',
      call: '500 phút gọi miễn phí',
      sms: '50 SMS',
      benefits: [
        '500MB data tốc độ cao mỗi ngày',
        '500 phút gọi miễn phí nội mạng',
        '50 SMS nội mạng mỗi tháng',
        'Tiết kiệm chi phí cho người dùng ít'
      ],
      smsCode: 'D30 gửi 9123'
    }
  ];

  getPlans(): Plan[] {
    return this.plans;
  }

  getFeaturedPlans(): Plan[] {
    return this.plans.filter(plan => plan.featured);
  }
}