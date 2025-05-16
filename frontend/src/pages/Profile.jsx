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
} from "@mui/material";
import UKFlag from "@/assets/images/UK.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import profileFormValidation from "@/helpers/yupHandler/profileFormValidation";
import { useSelector, useDispatch } from "react-redux";
import { saveProfile } from "@/store/features/profile/profileFormThunk";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileFormValidation),
  });

  // const login = useSelector((state) => state.login);
  const profile = useSelector((state) => state.profile);
  console.log(profile.uid);

  const onSaveForm = (data) => {
    dispatch(saveProfile({ uid: profile.uid, ...data }));
  };

  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSaveForm)}
          border={1}
          sx={{
            borderRadius: 2,
            width: "calc(100% / 12 * 9)",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: "30px" }}
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
                    >
                      +44
                    </Typography>
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
                <OutlinedInput placeholder="Enter your town / city" />
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
