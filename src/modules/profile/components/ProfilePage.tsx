import React, { useEffect, useState } from "react";
import DetailsTab from "./DetailsTab";
import UserApi from "../../../apis/UserApi";

const ProfilePage = () => {
  const [userData, setUserDate] = useState<any>(null);

  useEffect(() => {
    UserApi.getUserDetailsAsync().then((res) => setUserDate(res));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-[80%] h-auto mx-auto">
      <div className="col-span-2 lg:col-span-1 bg-blue-100  text-center ">
        <div className="my-10">
          <img
            src="https://cdn.lorem.space/images/face/.cache/150x150/rowan-freeman-G-4OXlHo86o-unsplash.jpg"
            className="mx-auto h-24 w-24 rounded-full mb-2"
            alt=""
          />
          <p>Student</p>
        </div>
        <div className="flex flex-col space-y-4 font-semibold bg-blue-100 py-4">
          <div className="mx-auto w-[100%]">
            <h2>Name</h2>
            <p>Piramilan</p>
          </div>

          <div>
            <h2>Email</h2>
            <p>piramilan@gmail.com</p>
          </div>
          <div>
            <h2>Phone</h2>
            <p>+94 0764823289</p>
          </div>
          <div>
            <h2>Country</h2>
            <p>Srilanka</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-blue-300">
        <DetailsTab userData={userData} />
      </div>
    </div>
  );
};

export default ProfilePage;
