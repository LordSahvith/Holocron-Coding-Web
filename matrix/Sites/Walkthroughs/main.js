const data = {
  id: 'AC1',
  Memory_Blocks: [
    {
      id: 'MB1',
      name: 'Memory Block 1',
      Day1: {
        morning: {
          cameras: ['cam1', 'cam2', 'cam3'],
        },
        evening: {
          cameras: ['cam1', 'cam2', 'cam3'],
          lucy: ['encounter1', 'encounter2'],
        },
        strands: {
          strand1: {
            glitches: ['glitch1', 'glitch2', 'glitch3'],
          },
          strand2: {
            glitches: ['glitch1', 'glitch2', 'glitch3'],
          },
          strand4: {
            glitches: ['glitch1', 'glitch2', 'glitch3', 'glitch4', 'glitch5'],
          },
        },
      },
    },
  ],
};

const template = `
    <div>
        <h2>Memory Block: ${data.Memory_Blocks[0].name}</h2>

        <h3>Day 1 - Morning Cameras:</h3>
        <ul>
            ${data.Memory_Blocks[0].Day1.morning.cameras
              .map(
                cam =>
                  `<li><input type="checkbox" id="${cam}" /><label for="${cam}">${cam}</label></li>`
              )
              .join('')}
        </ul>

        <h3>Day 1 - Evening Cameras:</h3>
        <ul>
            ${data.Memory_Blocks[0].Day1.evening.cameras
              .map(
                cam =>
                  `<li><input type="checkbox" id="${cam}" /><label for="${cam}">${cam}</label></li>`
              )
              .join('')}
        </ul>

        <h3>Day 1 - Strand 1:</h3>
        <ul>
            ${data.Memory_Blocks[0].Day1.strands.strand1.glitches
              .map(
                glitch =>
                  `<li><input type="checkbox" id="${glitch}" /><label for="${glitch}">${glitch}</label></li>`
              )
              .join('')}
        </ul>
    </div>
`;

window.document.getElementById('app').innerHTML = template;
