function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('なでしこ交流試合in関西2026')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ダウンロード用ファイル（f_*.html：base64）と、閲覧用のページ画像（v_*.html：JSON）を返す。
function getFileB64(key) {
  var map = { format: 'f_format', form: 'f_form', proof: 'v_proof', guide: 'v_guide', ad: 'v_ad' };
  if (!map[key]) throw new Error('unknown file');
  return HtmlService.createHtmlOutputFromFile(map[key]).getContent();
}
