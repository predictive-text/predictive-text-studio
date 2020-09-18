import test from "ava";
import * as fs from "fs";

import { returnWordlist } from "@worker/read-wordlist";

test("it should return a wordlist given an Excel file", async (t) => {
  t.deepEqual(
    await returnWordlist(fs.readFileSync("test/ExampleWordlist.xlsx")),
    [
      ["TŦE", 13644],
      ["E", 9134],
      ["SEN", 4816],
      ["Ȼ", 3479],
      ["SW̱", 2621],
      ["NIȽ", 2314],
      ["U¸", 2298],
      ["I¸", 1988],
      ["ȻSE", 1925],
      ["I", 1884],
    ]
  );
});