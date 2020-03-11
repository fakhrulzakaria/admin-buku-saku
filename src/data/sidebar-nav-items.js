export default function () {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Data Pasal",
      htmlBefore: '<i class="material-icons">book</i>',
      to: "/data-pasal",
    },
    {
      title: "Data Poin Siswa",
      htmlBefore: '<i class="material-icons">report</i>',
      to: "/data-poin-siswa",
    },
    {
      title: "Data Siswa",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/data-siswa",
    }
  ];
}
