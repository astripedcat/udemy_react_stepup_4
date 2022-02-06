// node-sassライブラリの追加が必要
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};
