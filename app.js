const fs = require('fs');
const ofx = require('ofx');

// Substitua 'seuarquivo.ofx' pelo caminho para o arquivo OFX que deseja ler
const arquivoOFX = 'nubank-2023-09.ofx';

// Lê o arquivo OFX
fs.readFile(arquivoOFX, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo OFX:', err);
    return;
  }

  // Parse do arquivo OFX
  const ofxData = ofx.parse(data);
  const transacoes = ofxData.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.BANKTRANLIST.STMTTRN

  console.log(JSON.stringify(transacoes))

});
