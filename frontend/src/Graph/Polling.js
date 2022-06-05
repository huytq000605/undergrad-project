const polling = async () => {
    try {
        const rawData = await(await fetch("http://localhost:4000/3-pha/graph", {method: "GET"})).json();
        const labels = rawData.pha_a.time;
        const envLabels = rawData.moi_truong.time;
        return {
            currentData:{
              labels,
              datasets: [
                {
                  label: 'Pha A',
                  data: rawData.pha_a.dong_dien,
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgb(255, 99, 132)',
                  fill: false,
                },
                {
                  label: 'Pha B',
                  data: rawData.pha_b.dong_dien,
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgb(53, 162, 235)',
                  fill: false,
                },
                {
                  label: 'Pha C',
                  data: rawData.pha_c.dong_dien,
                  borderColor: 'rgb(53, 235, 59)',
                  backgroundColor: 'rgb(53, 235, 59)',
                  fill: false,
                },
              ]
            },
            voltageData:{
              labels,
              datasets: [
                {
                  label: 'Pha A',
                  data: rawData.pha_a.dien_ap,
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgb(255, 99, 132)',
                  fill: false,
                },
                {
                  label: 'Pha B',
                  data: rawData.pha_b.dien_ap,
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgb(53, 162, 235)',
                  fill: false,
                },
                {
                  label: 'Pha C',
                  data: rawData.pha_c.dien_ap,
                  borderColor: 'rgb(53, 235, 59)',
                  backgroundColor: 'rgb(53, 235, 59)',
                  fill: false,
                },
              ]
            },
            tempData:{
              labels: envLabels,
              datasets: [
                {
                  label: 'Nhiệt độ tủ điện',
                  data: rawData.moi_truong.nhiet_do,
                  borderColor: 'rgb(255, 0, 0)',
                  backgroundColor: 'rgb(255, 0, 0)',
                  fill: false,
                },
                {
                  label: 'Độ ẩm tủ điện',
                  data: rawData.moi_truong.do_am,
                  borderColor: 'rgb(0,0,255)',
                  backgroundColor: 'rgb(0,0,255)',
                  fill: false,
                }
              ]
            }
        };
    } catch(err) {
        console.log(err);
    }
}

export default polling;