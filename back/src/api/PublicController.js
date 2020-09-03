import svgCaptcha from 'svg-captcha';
class PublicController{
  constructor() { }
  async getCaptcha(ctx){
    const newCaptcha = svgCaptcha.create({
      color: true,
      size: 4,
      noise: Math.floor(Math.random() * 10),
      width: 150,
      height: 50
    });
    ctx.body = {
      "code": 200,
      "data": newCaptcha.data
    }
  }
}

export default new PublicController();
