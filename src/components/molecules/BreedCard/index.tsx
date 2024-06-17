import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BorderedBox from "../../atoms/BorderedBox";
import { BreedCardStyled, BreedCardText } from "./styled";
import { useGetBreedImagesQuery } from "../../../services/images";

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
        <img
          src={breedImages?.url || "http://via.placeholder.com/640x360"}
          // src={
          //   Array.isArray(breedImages)
          //     ? breedImages?.url
          //     : "http://via.placeholder.com/640x360"
          // }
          alt={name}
          style={{
            width: "100%",
            height: "68%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

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
