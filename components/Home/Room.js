import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import style from "../../app/place.module.css";

const Room = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="grid xl:grid-cols-5 grid-cols-6 gap-4">
            <div>
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <span class={style.note}>Only 1 Seat Left</span>
                  <img
                    src="https://i.ibb.co/GcSMwnz/div-property-box.png"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody className="p-2">
                  <div className="flex justify-between w-full px-3">
                    <p>Dhanmondi 10</p>

                    <div className="flex">
                      <p>5.0</p>
                      <div>
                        <i className="fas fa-star ms-2" />
                      </div>
                    </div>
                  </div>
                  <a className="px-3 font-bold text-black">Standard Room</a>
                  <p className="px-3 font-thin w-full text-xs">
                    Comfortable and affordable option for a relaxing stay
                  </p>
                  <div className="flex justify-between w-full px-3 mt-3">
                    <div>
                      <p className="text-sm text-black font-bold">
                        Per Day : <span className="font-normal"> BDT 300</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Month :{" "}
                        <span className="font-normal"> BDT 6000</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Year :{" "}
                        <span className="font-normal"> BDT 80,000</span>
                      </p>
                    </div>
                    <div>
                      <i class="fa-regular fa-heart mt-7 text-2xl"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <span class={style.note}>Only 2 Seat Left</span>
                  <img
                    src="https://i.ibb.co/XZJNXrX/div-property-box-1.png"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody className="p-2">
                  <div className="flex justify-between w-full px-3">
                    <p>Dhanmondi 10</p>

                    <div className="flex">
                      <p>5.0</p>
                      <div>
                        <i className="fas fa-star ms-2" />
                      </div>
                    </div>
                  </div>
                  <a className="px-3 font-bold text-black">Standard Room</a>
                  <p className="px-3 font-thin w-full text-xs">
                    Comfortable and affordable option for a relaxing stay
                  </p>
                  <div className="flex justify-between w-full px-3 mt-3">
                    <div>
                      <p className="text-sm text-black font-bold">
                        Per Day : <span className="font-normal"> BDT 300</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Month :{" "}
                        <span className="font-normal"> BDT 6000</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Year :{" "}
                        <span className="font-normal"> BDT 80,000</span>
                      </p>
                    </div>
                    <div>
                      <i class="fa-regular fa-heart mt-7 text-2xl"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <span class={style.note}>Only 3 Seat Left</span>
                  <img
                    src="https://i.ibb.co/F05DVGX/div-property-box-2.png"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody className="p-2">
                  <div className="flex justify-between w-full px-3">
                    <p>Dhanmondi 10</p>

                    <div className="flex">
                      <p>5.0</p>
                      <div>
                        <i className="fas fa-star ms-2" />
                      </div>
                    </div>
                  </div>
                  <a className="px-3 font-bold text-black">Standard Room</a>
                  <p className="px-3 font-thin w-full text-xs">
                    Comfortable and affordable option for a relaxing stay
                  </p>
                  <div className="flex justify-between w-full px-3 mt-3">
                    <div>
                      <p className="text-sm text-black font-bold">
                        Per Day : <span className="font-normal"> BDT 300</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Month :{" "}
                        <span className="font-normal"> BDT 6000</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Year :{" "}
                        <span className="font-normal"> BDT 80,000</span>
                      </p>
                    </div>
                    <div>
                      <i class="fa-regular fa-heart mt-7 text-2xl"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <span class={style.note2}>Join Waiting List</span>
                  <img
                    src="https://i.ibb.co/W6SmswG/div-property-box-3.png"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody className="p-2">
                  <div className="flex justify-between w-full px-3">
                    <p>Dhanmondi 10</p>

                    <div className="flex">
                      <p>5.0</p>
                      <div>
                        <i className="fas fa-star ms-2" />
                      </div>
                    </div>
                  </div>
                  <a className="px-3 font-bold text-black">Standard Room</a>
                  <p className="px-3 font-thin w-full text-xs">
                    Comfortable and affordable option for a relaxing stay
                  </p>
                  <div className="flex justify-between w-full px-3 mt-3">
                    <div>
                      <p className="text-sm text-black font-bold">
                        Per Day : <span className="font-normal"> BDT 300</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Month :{" "}
                        <span className="font-normal"> BDT 6000</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Year :{" "}
                        <span className="font-normal"> BDT 80,000</span>
                      </p>
                    </div>
                    <div>
                      <i class="fa-regular fa-heart mt-7 text-2xl"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <span class={style.note2}>Join Waiting List</span>
                  <img
                    src="https://i.ibb.co/W6SmswG/div-property-box-3.png"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody className="p-2">
                  <div className="flex justify-between w-full px-3">
                    <p>Dhanmondi 10</p>

                    <div className="flex">
                      <p>5.0</p>
                      <div>
                        <i className="fas fa-star ms-2" />
                      </div>
                    </div>
                  </div>
                  <a className="px-3 font-bold text-black">Standard Room</a>
                  <p className="px-3 font-thin w-full text-xs">
                    Comfortable and affordable option for a relaxing stay
                  </p>
                  <div className="flex justify-between w-full px-3 mt-3">
                    <div>
                      <p className="text-sm text-black font-bold">
                        Per Day : <span className="font-normal"> BDT 300</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Month :{" "}
                        <span className="font-normal"> BDT 6000</span>
                      </p>
                      <p className="text-sm text-black font-bold">
                        Per Year :{" "}
                        <span className="font-normal"> BDT 80,000</span>
                      </p>
                    </div>
                    <div>
                      <i class="fa-regular fa-heart mt-7 text-2xl"></i>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
