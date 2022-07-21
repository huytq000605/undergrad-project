import { Container } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { api } from "shared/api"
import { Toggle } from "rsuite";

export const HomePage = () => {

    return (
        <Container>
            <div class="student-profile py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent text-center">
                                    <img class="profile_img" src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg" alt="student dp" style={{height: "400px", width: "400px"}}/>
                                    <h3>Tran Quang Huy</h3>
                                </div>
                                <div class="card-body">
                                    <p class="mb-0"><strong class="pr-1">Student ID:</strong> 20181535</p>
                                    <p class="mb-0"><strong class="pr-1">CPA:</strong> 3.1</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent border-0">
                                    <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Account Information</h3>
                                </div>
                                <div class="card-body pt-0">
                                    <table class="table table-bordered">
                                        <tr>
                                            <th width="30%">Name</th>
                                            <td width="2%">:</td>
                                            <td>Tran Quang Huy</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Academic Year	</th>
                                            <td width="2%">:</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div></div>
                            <div class="card shadow-sm">
                                <div class="card-header bg-transparent border-0">
                                    <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div class="card-body pt-0">
                                    <p>This is the graduation project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
