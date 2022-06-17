import youtubeWorker from "@/jobs/youtubeWorker";

export default async function youtube(bot: any, message: any) {
  const chatId = message.chat.id,
    messageId = message.message_id;
  const indexOfSpace: string = message.text.indexOf(" ");
  const text: string = message.text.substring(indexOfSpace + 1);
  const verificator: number = message.text.split(" ").length;

  if (verificator == 1) {
    bot.sendMessage(
      chatId,
      "Adjunta el titulo del video o el nombre del mismo luego de escribir el comando /yt, ejemplo: `/yt how to upload a repository to GitHub`",
      {
        reply_to_message_id: messageId,
        parse_mode: "Markdown",
      }
    );
  } else {
    bot.sendMessage(chatId, await youtubeWorker(text), {
      reply_to_message_id: messageId,
      parse_mode: "Markdown",
    });
  }
}
