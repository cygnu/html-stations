function getData() {
    // Arrowという文字列を返す処理をアロー関数を入れて書きましょう。
    let printWord = () => {
        console.log("Arrrow");
    };

    return printWord(); // ここにアロー関数の処理を書く
}