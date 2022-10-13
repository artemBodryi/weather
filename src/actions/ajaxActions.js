import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
    const ids = {
        Kyiv: 703448,
        Brovary: 711390,
        Riga: 456173,
        Munich: 2867714,
    };

    const fetches = await Promise.all(
        Object.values(ids).map((e) => 
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?id${e}&appid=61b8848b2fb5019bb549253a9f7f97a5`
            ).then((e) => e.json())
        )
    );

    dispatch({
        types: FETCH_WEATHER,
        payload: {
            Kyiv: fetches[0],
            Brovary: fetches[1],
            Riga: fetches[2],
            Munich: fetches[3],
        },
    });
};

