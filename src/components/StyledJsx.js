// styled-jsxライブラリの追加が必要
// Styled-jsxはNext.jsに標準搭載だったらしいが、今はcssModule押し？
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // デフォルトではsassは使えないので &:hoverは動かない
          // @styled-jsx/plugin-sassライブラリを入れたが、動かない
          // styled-jsx/plugin-sassライブラリでもダメ
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
