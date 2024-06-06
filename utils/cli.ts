import chalk from "chalk";
import { debugPrefix } from "../locales/zh-CN";

export interface PermissionLevel {
  /**
   * @description 权限等级
   */
  level: 1 | 2 | 3;
  /**
   * @description 权限
   */
  name: Permission;
}

export enum Permission {
  /**
   * @description 一级权限
   */
  ONE = 1,
  /**
   * @description 二级权限
   */
  TWO = 2,
  /**
   * @description 三级权限
   */
  THREE = 3,
}

export const debug = (msg: string, pl?: PermissionLevel | number) => {
  let color = chalk.white;
  if (pl) {
    switch (typeof pl === "number" ? pl : pl.level) {
      case 1:
        color = chalk.green;
        break;
      case 2:
        color = chalk.yellow;
        break;
      case 3:
        color = chalk.red;
        break;
      default:
        color = chalk.white;
        break;
    }
  }
  console.log(color(msg));
};

export const debugArticle = (req: any) => {
  debug(
    debugPrefix.Common.Prefix +
      debugPrefix.Common.Spacing +
      debugPrefix.PostArticleSuccess +
      debugPrefix.Common.Spacing +
      JSON.stringify(req?.body ?? "null"),
    1,
  );
};
