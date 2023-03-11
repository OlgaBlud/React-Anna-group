import { useEffect, useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  console.log(dogPhotos);
  // Var 1

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     // .then((data) => console.log(data))
  //     .then((data) => setDogPhotos([data]));
  // }, []);

  // Var 2

  function getDogPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setDogPhotos([...dogPhotos, data]));

    // .then((data) =>
    //   setDogPhotos((prevState) => {
    //     prevState.push(data);
    //   })
    // );
  }

  return (
    <div>
      <Button onClick={getDogPhoto} text="Get a dog!" />
      {dogPhotos.length === 0 ? (
        <p>Get your first dog by clicking the button!</p>
      ) : (
        <ul>
          {dogPhotos.map((item) => {
            const dogName = item.message.slice(30);
            return (
              <li key={item.id}>
                <DogPhoto img={item.message} />
                {dogName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default DogGallery;
