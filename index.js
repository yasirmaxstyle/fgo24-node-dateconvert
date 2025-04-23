import moment from "moment";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const dateConvert = async () => {
  const dateInput = await rl.question('Masukkan tanggal dengan format (DD-MM-YYYY): ');
  const output = moment(dateInput, "DD-MM-YYYY").format("DD/MM/YYYY");
  // validate using regex format
  const formatDate = /\d{2}-\d{2}-\d{4}/;
  if (output === "Invalid date") {
    rl.close()
    throw new Error('Invalid date')
  } else if (dateInput.match(formatDate)) {
    rl.close();
    return output;
  }

  else throw new Error('Invalid format');
}

try {
  const res = await dateConvert()
  console.log(res)
} catch (error) {
  if (error.message === "Invalid date") console.log('Tanggal tidak valid.')
  if (error.message === 'Invalid format') console.log('Format tanggal salah.')
}
