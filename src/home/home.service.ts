import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {

    getWelcomeInfo(){
        return [
            {
              "id": 1,
              "title": "Welcome to Optimity!",
              "description": "We are dedicated to maximizing the potential of our customers' IT systems, ensuring that every investment delivers its full worth. As a vendor-neutral solution provider, we prioritize our customers' best interests, offering comprehensive, tailored solutions. Our experienced team is committed to delivering innovative and cutting-edge ICT solutions that precisely match each customer's unique needs.",
              "imgUrl": "./../assets/images/welcome.jpg"
            }
          ];
    }
}
