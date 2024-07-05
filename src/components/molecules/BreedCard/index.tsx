import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BorderedBox from "../../atoms/BorderedBox";
import { BreedCardStyled, BreedCardText } from "./styled";
import { useGetBreedImagesQuery } from "../../../services/images";

// interface Image {
//   url: string;
// }

interface BreedImages {
  url: string;
}

interface BreedCardProps {
  id: number;
  referenceImageId: string;
  image: string;
  name: string;
  temperament: string;
  moreInfo: string;
}

const MAX_CHARACTERS = 80;

const BreedCard: React.FC<BreedCardProps> = ({
  id,
  name,
  temperament,
  referenceImageId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trimmedTemperament =
    temperament && temperament.length > MAX_CHARACTERS
      ? `${temperament.slice(0, MAX_CHARACTERS)} ...`
      : temperament;

  const { data: breedImages } = useGetBreedImagesQuery(referenceImageId);
  // const imageUrl = breedImages?.url || "http://via.placeholder.com/640x360";

  return (
    <BorderedBox
      borderRadius={20}
      sx={{
        width: "17vw",
        height: "40vh",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      showHovered={isHovered}
    >
      <BreedCardStyled
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {Array.isArray(breedImages) ? (
            breedImages.length > 0 ? (
              breedImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Breed Image ${index}`}
                  style={{ width: "200px", height: "auto", margin: "10px" }}
                />
              ))
            ) : (
              <img
                src="http://via.placeholder.com/640x360"
                alt="Placeholder"
                style={{ width: "200px", height: "auto", margin: "10px" }}
              />
            )
          ) : (
            breedImages && (
              <img
                src={
                  (breedImages as BreedImages).url ||
                  "http://via.placeholder.com/640x360"
                }
                alt="Breed Image"
                style={{ width: "200px", height: "auto", margin: "10px" }}
              />
            )
          )}
        </div>

        {/* {breedImages && breedImages.length > 0 ? (
          breedImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`${name} ${index}`}
              style={{
                width: "100%",
                height: "68%",
                objectFit: "cover",
                borderRadius: "20px",
                marginBottom: "10px",
              }}
            />
          ))
        ) : (
          <img
            src="http://via.placeholder.com/640x360"
            alt="Placeholder"
            style={{
              width: "100%",
              height: "68%",
              objectFit: "cover",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          />
        )} */}

        {/* <img
          src={imageUrl}
          src={breedImages?.url || "http://via.placeholder.com/640x360"}
          src={
            Array.isArray(breedImages)
              ? breedImages?.url
              : "http://via.placeholder.com/640x360"
          }
          alt={name}
          style={{
            width: "100%",
            height: "68%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        /> */}

        <BreedCardText>
          <h2
            style={{
              marginBottom: "5px",
              fontSize: "26px",
            }}
          >
            {name}
          </h2>
          {isHovered && (
            <div
              className="more-info"
              style={{ marginLeft: "80%", marginBottom: "5%", zIndex: "5" }}
            >
              <NavLink
                to={`/breeds/${id}`}
                style={{
                  zIndex: 5,
                  color: "orange",
                  textDecoration: "none",
                }}
              >
                more
              </NavLink>
            </div>
          )}
          <p style={{ marginBottom: "5px", fontSize: "20px" }}>
            {trimmedTemperament}
          </p>
        </BreedCardText>
      </BreedCardStyled>
    </BorderedBox>
  );
};

export default BreedCard;
