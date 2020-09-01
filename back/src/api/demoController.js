class DemoController{
  constructor() { }
  async demo(ctx){
    console.log("eh wan")
    ctx.body = {
      "message": "from demoController"
    }
  }
}

export default new DemoController();
