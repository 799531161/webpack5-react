import request from "@/utils/request";

export default class HomeServer {
  static getId(params: any) {
    return request({
      url: "/",
      method: "get",
      params,
    });
  }
}

// HomeServer.getId()