import Api from "service/api";

export default class TestApi extends Api {
  async getComment(postId: number) {
    const res = await super.get("/comments", { postId });

    return res.data;
  }
}