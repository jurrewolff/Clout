const databaseCon = require("../libs/database");
async function getWordsOfWordList(input) {
  try {
    const result = await databaseCon.queryMySQL(
      `select * from words where wordlistID = ${input.request.id};`
    );
    const resultWordlist = await databaseCon.queryMySQL(
      `select * from wordlist where Id = ${input.request.id}`
    );

    const returnObject = {
      wordlistName: resultWordlist[0][0].Name,
      description: resultWordlist[0][0].description,
      userID: resultWordlist[0][0].userID,
      words: result[0],
    };
    return returnObject;
  } catch (error) {
    throw new Error("error retrieving data from database", error);
  }
}

async function getWordListByUserID(input) {
  try {
    console.log(
      `select * from wordlist where userID = ${input.request.userID}`
    );
    const result = await databaseCon.queryMySQL(
      `select * from wordlist where userID = '${input.request.userID}'`
    );
    const returnObject = [];
    for (const objResult of result[0]) {
      returnObject.push({
        wordlistName: objResult.Name,
        description: objResult.description,
        userID: objResult.userID,
        wordlistID: objResult.Id,
      });
    }
    return { wordlistInfo: returnObject };
  } catch (error) {
    throw new Error("error retrieving data from database", error);
  }
}

async function getWordExceptIDs(input) {
  try {
    let strFilter = "";
    for (const filterId of input.request.filter) {
      strFilter += filterId.id + ",";
    }
    strFilter = strFilter.slice(0, -1);
    const result = await databaseCon.queryMySQL(` select * from words
    where \`wordlistID\` = ${input.request.wordlistID}
    AND \`Id\` NOT IN (${strFilter})
    ORDER BY RAND()
    limit 1
    `);
    const returnObject = {
      words: result[0],
    };
    return returnObject;
  } catch (error) {
    console.log(error.message)
    throw new Error("error retrieving data from database", error);
  }
}

async function post(inputWordlist) {
  try {
    if (inputWordlist.request.words.length !== 0) {
      console.log(inputWordlist.request.userID);
      // const connection = databaseCon.connect()
      const queryWordList = `Insert Into wordlist(\`Name\`, \`description\`, \`userID\`) values (
        '${inputWordlist.request.wordlistName} ',
        '${inputWordlist.request.description}',
        '${inputWordlist.request.userID}')`;
      const resultWordList = await databaseCon.queryMySQL(queryWordList);

      let queryValues = "";
      for (const word of inputWordlist.request.words) {
        queryValues += `('${word.word} ' , '${word.description}', ${resultWordList[0].insertId}),`;
      }
      queryValues = queryValues.slice(0, -1);
      const query = `insert into words (\`word\`, \`description\`, \`wordlistID\` ) values ${queryValues}`;

      await databaseCon.queryMySQL(query);

      return {
        statusCode: 200,
        responseBody: "Saving wordlist to dataBase succesful"
      };
    }
  } catch (error) {
    console.log("error in saving list:" + error.message);
    throw new Error("Error saving new wordlist: " + error.message);
  }
}

module.exports = {
  getWordListByUserID,
  post,
  getWordsOfWordList,
  getWordExceptIDs,
};
