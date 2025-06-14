import {
  Box,
  Typography,
  Stack,
  FormControl,
  TextField,
  FormLabel,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  Avatar,
  Button,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import UKFlag from "@/assets/images/UK.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import profileFormValidation from "@/helpers/yupHandler/profileFormValidation";
import { useSelector, useDispatch } from "react-redux";
import { saveProfile } from "@/store/features/profile/profileFormThunk";
import { useEffect, useState } from "react";
import { getProfile } from "@/store/features/profile/profileFormThunk";
import { createContext } from "react";
import CustomSnackBar from "@/layouts/CustomSnackBar";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const usersProfile = useSelector((state) => state.profile.profile);
  const profileError = useSelector((state) => state.profile.error);

  const [isOpenPushNotification, setIsOpenPushNotification] = useState(false);
  const [isErrorOpenPushNotification, setErrorOpenPushNotification] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileFormValidation),
    values: {
      name: usersProfile?.name,
      surname: usersProfile?.surname,
      phone: usersProfile?.phone,
      city: usersProfile?.city,
      town: usersProfile?.town,
      postcode: usersProfile?.postcode,
      bio: usersProfile?.bio,
    },
  });
  useEffect(() => {
    if (profile.uid) {
      dispatch(getProfile(profile.uid));
    }
  }, [profile.uid]);

  const onSaveForm = (data) => {
    console.log(data);
    dispatch(saveProfile({ uid: profile.uid, ...data }));
    if (!profileError) {
      setTimeout(() => {
        setIsOpenPushNotification(true);
      }, 2000);
    } else {
      setErrorOpenPushNotification(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "calc(100dvh - 120px)",
          maxHeight: "100%",
          alignContent: "center",
          overflowY: "hidden",
        }}
        borderRadius={2}
        borderColor="grey.300"
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSaveForm)}
          sx={{
            borderRadius: 2,
            width: "calc(100% / 12 * 9)",
            boxShadow: `0px 5px 22px rgba(0, 0, 0, .6);`,
            maxWidth: "100%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "30px",
              margin: "20px",
            }}
          >
            Personal Information
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Box sx={{ width: "100%" }}>
              <FormControl
                fullWidth
                sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
              >
                <FormLabel required>Name</FormLabel>
                <TextField
                  {...register("name")}
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  size="small"
                />
                <FormHelperText sx={{ color: "red" }}>
                  {errors.name?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <FormControl
                fullWidth
                sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
              >
                <FormLabel required>Surname</FormLabel>
                <TextField
                  sx={{ width: "100%" }}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  size="small"
                  {...register("surname")}
                />
                <FormHelperText sx={{ color: "red" }}>
                  {errors.surname?.message}
                </FormHelperText>
              </FormControl>
            </Box>
          </Stack>

          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <FormLabel
                required
                sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
              >
                Phone Number
              </FormLabel>
              <OutlinedInput
                fullWidth
                {...register("phone")}
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                sx={{
                  "& .MuiOutlinedInput-input::placeholder": {
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  },
                }}
                size="small"
                startAdornment={
                  <InputAdornment position="start">
                    <Avatar src={UKFlag} sx={{ width: 20, height: 20 }} />
                    <Typography
                      variant="body1"
                      component="span"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        display: "inline-block",
                        marginLeft: "10px",
                      }}
                    ></Typography>
                  </InputAdornment>
                }
              ></OutlinedInput>
              <FormHelperText sx={{ color: "red" }}>
                {errors.phone?.message}
              </FormHelperText>
            </FormControl>
          </Box>

          <Stack
            mt={2}
            direction="row"
            spacing={3}
            justifyContent="space-between"
          >
            <Box sx={{ width: "100%" }}>
              <FormControl
                size="small"
                sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
                fullWidth
                required
              >
                <FormLabel>City</FormLabel>
                <OutlinedInput
                  placeholder="Enter your city"
                  {...register("city")}
                />
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <FormControl
                fullWidth
                required
                size="small"
                sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
              >
                <FormLabel>Town / City </FormLabel>
                <OutlinedInput
                  placeholder="Enter your town / city"
                  {...register("town")}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <FormControl
              size="small"
              fullWidth
              required
              sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
            >
              <FormLabel>Postcode</FormLabel>
              <OutlinedInput
                placeholder="Enter your postcode"
                {...register("postcode")}
              />
              <FormHelperText sx={{ color: "red" }}>
                {errors.postcode?.message}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControl
              required
              fullWidth
              size="small"
              sx={{
                "& .MuiFormLabel-asterisk": { color: "red" },
              }}
            >
              <FormLabel>Bio</FormLabel>
              <TextareaAutosize
                {...register("bio")}
                placeholder="Tell us a bit about yourself — like where you're based, what you're interested in, or how you use PriceHunt."
                minRows={{ xs: 3, md: 5 }}
                border
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  border: "0.5px solid gray",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              ></TextareaAutosize>
              <FormHelperText sx={{ color: "red" }}>
                {errors.bio?.message}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2 }} textAlign="center">
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#34D399",
                padding: "10px 20px",
                borderRadius: "15px",
              }}
            >
              Save and Exit
            </Button>

            <CustomSnackBar
              isErrorOpenPushNotification={isErrorOpenPushNotification}
              isOpenPushNotification={isOpenPushNotification}
              setErrorOpenPushNotification={setErrorOpenPushNotification}
              setIsOpenPushNotification={setIsOpenPushNotification}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
