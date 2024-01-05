const {MapleStoryApi, MapleStoryApiError} = require('maplestory-openapi');
const apiKey = 'test_f63a7810c78b005c29d2eeb0d268d56095a92ed683c22b294d7e385cb2d734b6aa5d2bc7ccf9dc2ba19c5c03e37afb31';
const api = new MapleStoryApi(apiKey);
var characterAPI = "f";
inputName = String("아델")  

async function getCharacterAPI(){

    await api.getCharacter(inputName)
    .then((dto)=>{
        characterAPI = String(dto.ocid);
        //console.log(characterAPI);
    })
    .catch((e)=>{
        if (e instanceof MapleStoryApiError) {
            // handles MapleStoryApiError
        } else {
            // handle other errors
        }

        console.log(e);
    });
        
    api.getCharacterBasic(characterAPI, {
        year: 2024,
        month: 1,
        day: 4,
    })
        .then((dto) => {
            console.log(dto);
            console.log("name: ", dto.characterName, " world: ",dto.worldName, " 직업: ", dto.characterClass);
        })
        .catch((e)=>{
            if (e instanceof MapleStoryApiError) {
                // handle MapleStoryApiError
            } else {
                // handle other errors
            }

            console.log(e);
        });
    }



api.getCubeHistory(1000, {
    year: 2024,
    month: 1,
    day: 3
})
    .then((dto) => {
        const {count, cubeHistory, nextCursor} = dto;
        console.log('You used ' + count + ' cubes.');
    })
    .catch((e) => {
        if (e instanceof MapleStoryApiError) {
            // handle MapleStoryApiError
        } else {
            // handle other errors
        }

        console.log(e);
    });

getCharacterAPI();