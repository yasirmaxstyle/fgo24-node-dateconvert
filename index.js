import moment from "moment";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const dateConvert = async () => {
  const dateInput = await rl.question('Masukkan tanggal dengan format (DD/MM/YYYY): ');
  const output = moment(dateInput, "DD-MM-YYYY").format("DD/MM/YYYY");
  // validate using regex format
  const formatDate = /\d{2}-\d{2}-\d{4}/;
  if (dateInput.match(formatDate)) {
    console.log(output);
    rl.close();
  }
  else console.log('Format tanggal salah.');

};

dateConvert();
