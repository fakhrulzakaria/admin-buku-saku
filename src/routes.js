import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./default-layouts";
import { FormLayout } from "./form-layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import DataSiswa from "./views/DataSiswa";
import EditSiswa from "./views/EditSiswa";
import DataPoinSiswa from "./views/DataPoinSiswa";
import TambahPasal from "./views/TambahPasal";
import DataPasal from "./views/DataPasal";
import Login from "./views/Login";
import TambahPoinSiswa from "./views/TambahPoinSiswa";
import EditPoinSiswa from "./views/EditPoinSiswa";
import TambahSiswa from "./views/TambahSiswa";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/data-siswa",
    layout: DefaultLayout,
    component: DataSiswa
  },
  {
    path: "/data-poin-siswa",
    layout: DefaultLayout,
    component: DataPoinSiswa
  },
  {
    path: "/tambah-pasal",
    layout: DefaultLayout,
    component: TambahPasal
  },
  {
    path: "/tambah-siswa",
    layout: DefaultLayout,
    component: TambahSiswa
  },
  {
    path: "/edit-siswa",
    layout: DefaultLayout,
    component: EditSiswa
  },
  {
    path: "/tambah-poin-siswa",
    layout: DefaultLayout,
    component: TambahPoinSiswa
  },
  {
    path: "/edit-poin-siswa",
    layout: DefaultLayout,
    component: EditPoinSiswa
  },
  {
    path: "/data-pasal",
    layout: DefaultLayout,
    component: DataPasal
  },
  {
    path: "/login",
    layout: FormLayout,
    component: Login
  }
];
