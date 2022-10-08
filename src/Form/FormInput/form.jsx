import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Form extends React.Component {
    render() {
        return (
            <div class="container justify-content-center w-50 p-5">
                <h2>Form Register</h2>
                <form class="mt-3">
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Nama</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputName" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">No. WA</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputNomor" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Jenis Kelamin</label>
                        <div class="col-sm-9">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>jenis kelamin</option>
                                <option value="1">Laki-Laki</option>
                                <option value="2">Perempuan</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-7 offset-sm-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Setuju dengan kebijakan perusahaan
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <button type="submit" class="btn btn-primary ">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}