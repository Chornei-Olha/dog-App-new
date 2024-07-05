import {
  Autocomplete,
  Box,
  Button,
  Pagination,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ListImagesProps } from "../../molecules/Grid";
import shadowBottom from "../../../assets/img/mainPage/shadow/shadow-1.svg";
import shadowTop from "../../../assets/img/mainPage/shadow/shadow-2.svg";
import {
  Wrap,
  Container,
  ShadowTopWrap,
  ShadowBottomWrap,
  FiltersWrap,
} from "./styled";
import { Grid } from "../../molecules/Grid";
import { useGetImagesWithFavorites } from "../../../utils/hooks";
import { Loader } from "../../atoms/Loader";

const listFormats = [
  { title: "All", value: "All" },
  { title: "gif", value: "gif" },
  { title: "png", value: "png" },
  { title: "jpg", value: "jpg" },
];

const addMissingProperties = (images: any[]): ListImagesProps[] => {
  return images.map((image) => ({
    ...image,
    width: image.width || 800,
    height: image.height || 600,
    mime_type: image.mime_type || "image/jpeg",
    breeds: image.breeds || [],
  }));
};

export const MainPage = () => {
  const [page, setPage] = useState<number>(1);
  const [imageFormat, setImageFormat] = useState<string>("all");
  const [order, setImageOrder] = useState<string>("RANDOM");
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    limit: 10,
    page,
    mime_type: imageFormat,
    order,
  });

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeAutocomplete = (
    _event: React.ChangeEvent<unknown>,
    value: string | null
  ) => {
    setImageFormat(value!);
  };

  const handleSort = (value: string) => {
    setImageOrder(value);
  };

  const transformedImages = favoritedImages
    ? addMissingProperties(favoritedImages)
    : [];

  return (
    <Wrap>
      <ShadowTopWrap>
        <img src={shadowTop} alt="" />
      </ShadowTopWrap>
      <Container>
        <FiltersWrap
          sx={{
            width: "100%",
            marginBottom: 2,
          }}
        >
          {/*  FILTERS  */}
          <Autocomplete
            sx={{ width: "200px", padding: 0 }}
            id="image-format"
            options={listFormats.map((option) => option.title)}
            onChange={handleChangeAutocomplete}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="Image format" />
            )}
          />

          {/*  SORT */}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              style={order === "RANDOM" ? { backgroundColor: "yellow" } : {}}
              onClick={() => handleSort("RANDOM")}
            >
              rand
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={order === "ABS" ? { backgroundColor: "yellow" } : {}}
              onClick={() => handleSort("ABS")}
            >
              Abs
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={order === "DESC" ? { backgroundColor: "yellow" } : {}}
              onClick={() => handleSort("DESC")}
            >
              Desc
            </Button>
          </Box>
        </FiltersWrap>
        {isLoading && <Loader />}
        {favoritedImages && <Grid listImages={transformedImages} />}

        <Pagination
          count={3}
          showFirstButton
          showLastButton
          page={page}
          onChange={handleChangePage}
        />
      </Container>
      <ShadowBottomWrap>
        <img src={shadowBottom} alt="" />
      </ShadowBottomWrap>
    </Wrap>
  );
};
