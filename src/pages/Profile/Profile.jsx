import { useState } from "react";
import { useAuth } from "../../provider/Auth/AuthProvider";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user, updateUserNameAndPhoto, loading, verifyEmail } = useAuth();
  const [name, setName] = useState(user.displayName);
  const [photoUrl, setPhotoUrl] = useState(user.photoURL);

  const sendEmailVerification = async () => {
    await verifyEmail();
    toast("Email verification sent to your email, check your inbox or spam");
  };

  console.log(user);
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="p-6 shadow-lg">
        <div className="flex flex-wrap gap-4">
          {loading ? (
            <h3>Loading ...</h3>
          ) : (
            <>
              <div className="avatar ">
                <div className="w-20 rounded-full border ">
                  <img src={user.photoURL || "https://bit.ly/40XidAA"} />
                </div>
              </div>
              <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">
                {user?.displayName || (
                  <>
                    <span className="text-red-400">Anonymous</span>
                  </>
                )}
              </h4>
            </>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">Email</h4>
            <p className="text-lg">{user.email}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button
            disabled={user.emailVerified}
            onClick={sendEmailVerification}
            className="btn btn-outline btn-info"
          >
            {user.emailVerified ? "Verified" : "Verify Email"}
          </button>

          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn btn-outline btn-success">
            Update profile
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="">
                <label htmlFor="name" className="text-lg font-bold block mb-2">
                  Update Name
                </label>
                <input
                  value={name}
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  className="input input-bordered input-info w-full max-w-xs"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="imageUrl"
                  className="text-lg font-bold block mb-2"
                >
                  Image Url
                </label>
                <input
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  id="imageUrl"
                  placeholder=""
                  className="input input-bordered input-info w-full max-w-xs"
                />
              </div>
              <div className="modal-action">
                <label
                  onClick={() => updateUserNameAndPhoto(name, photoUrl)}
                  htmlFor="my-modal-6"
                  className="btn btn-success"
                >
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
