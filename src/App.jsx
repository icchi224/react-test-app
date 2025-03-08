export const App = () => {
    // ボタンを押した時に実行
    const onClickButton = () => {
        alert("ボタンがクリックされました");
    };

    return (
        <div>
            <h1 style={{color: "red"}}>こんにちは</h1>
            <p>今日はいい天気ですね</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};
