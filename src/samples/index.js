import Images from 'paraview-glance/src/samples/images';

const version =
  window.VSL_VERSION && window.VSL_VERSION !== 'main'
    ? window.VSL_VERSION
    : 'main';

// prettier-ignore
export default [
  {
    label: 'Case a736566-run@10seg',
    image: Images.caso03,
    size: '5.3 MB',
    description: 'glenn:0.7[L/m], vci:1.13[L/m], Qs: 1.85%',
    acknowledgement: 'case a736566',
    datasets: [
      {
        name: 'caso-A736566.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/caso-A736566.glance`,
      },
    ],
  },
  {
    label: 'Case a815746-run1@10seg',
    image: Images.caso08,
    size: '14.7 MB',
    description: 'bi-glenn  lglenn:1.4[L/m], rglenn:1.0[L/m], vci:2.2[L/m]',
    acknowledgement: 'case a815746',
    datasets: [
      {
        name: 'caso08.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/caso08.glance`,
      },
    ],
  },
    {
    label: 'Case a815746-run2@2seg',
    image: Images.caso08b,
    size: '14.7 MB',
    description: 'bi-glenn  lglenn:1.0[L/m], rglenn:1.0[L/m], vci:2.2[L/m]',
    acknowledgement: 'case a815746',
    datasets: [
      {
        name: 'caso08b.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/caso08b.glance`,
      },
    ],
  },
  {
    label: 'Case a844152',
    image: Images.caso07,
    size: '8.4 MB',
    description: 'preplanning simulation Extracardiac Tube - Fontan step. CFD. Tricuspid atresia 12 years old patient',
    acknowledgement: 'case a844152',
    datasets: [
      {
        name: 'caso.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/caso.glance`,
      },
    ],
  },
  {
    label: 'Case a4871883',
    image: Images.caso09,
    size: '7.3 MB',
    description: 'Tricuspid atresia 2.5 years old',
    acknowledgement: 'case a4871883',
    datasets: [
      {
        name: 'caso.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/caso-A4871883.glance`,
      },
    ],
  },
   {
    label: 'Case ea904f-pre',
    image: Images.caso02pre,
    size: '4.9 MB',
    description: 'Redireccionamiento de Tubo Extracardíaco - prequirúrgico',
    acknowledgement: 'case ea904f-pre',
    datasets: [
      {
        name: 'caso.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/EA904F-pre.glance`,
      },
    ],
  },
  {
    label: 'Case ea904f-pos',
    image: Images.caso02pos,
    size: '7.4 MB',
    description: 'Redireccionamiento de Tubo Extracardíaco - postquirúrgico',
    acknowledgement: 'case ea904f-pos',
    datasets: [
      {
        name: 'caso.glance',
        url: `https://raw.githubusercontent.com/maurferdev/dataset_res/${version}/EA904F-pos.glance`,
      },
    ],
  },
];
