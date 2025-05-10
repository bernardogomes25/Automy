const dayjs = require("dayjs");

function gerarMensagem(nome, baterias) {
  const hoje = dayjs();

  const futuras = baterias.filter(b => dayjs(b.data_agendamento, "DD/MM/YYYY").isAfter(hoje));
  const passadas = baterias.filter(b => dayjs(b.data_agendamento, "DD/MM/YYYY").isBefore(hoje));

  let mensagem = `Olá, ${nome}!\n\n`;

  if (futuras.length) {
    mensagem += "📅 Próximas baterias agendadas:\n";
    futuras.forEach(b => {
      mensagem += `- ${b.data_agendamento} às ${b.horario_agendamento} (${b.qtde_pessoas} pessoas)\n`;
    });
  } else {
    mensagem += "❌ Você não possui baterias futuras agendadas.\n";
  }

  if (passadas.length) {
    mensagem += `\nSe desejar, posso te mostrar suas baterias passadas. 😉`;
  }

  return mensagem;
}

module.exports = { gerarMensagem };
