import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  CardActions,
  Button,
  FormControl,
  TextField,
  FormLabel,
  TextareaAutosize,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { StarRounded, StarBorderRounded } from "@mui/icons-material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import saveComments from "@/store/features/comments/commentsThunk";

const OveralRating = ({ averageRating }) => {
  const dispatch = useDispatch();
  const productPageParams = useParams();

  const [leaveCommentIsOpen, setLeaveCommentIsOpen] = useState(false);
  const [currentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser from localStorage:", error);
      return null;
    }
  });

  const saveComment = (data) => {
    dispatch(saveComments({ ...data, productId: productPageParams.productId }));
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    values: {
      username: `${currentUser?.name} ${currentUser?.surname}`,
      comment: "",
    },
  });

  return (
    <>
      <Card>
        <CardContent>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Reviews and Ratings
          </Typography>

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Rating
              precision={0.1}
              readOnly
              value={averageRating}
              icon={<StarRounded color="green"></StarRounded>}
              emptyIcon={<StarBorderRounded fontSize="inherit" />}
            />
            <Typography variant="body1" color="initial">
              {averageRating} of 5
            </Typography>
          </Box>

          {leaveCommentIsOpen && (
            <Box display="flex" flexDirection="column" gap={2} py={2}>
              <FormControl fullWidth required>
                {currentUser ? (
                  <>
                    <FormLabel>Username:</FormLabel>
                    <TextField
                      disabled
                      {...register("username")}
                      id=""
                      label=""
                      size="small"
                      sx={{
                        ".Mui-disabled": {
                          bgcolor: "#D3D3D3",
                          cursor: "pointer",
                        },
                      }}
                      title="You can't change username name"
                    />
                  </>
                ) : (
                  <p
                    style={{
                      color: "red",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                    }}
                  >
                    You must be <a href="/login">logged in</a> to leave a
                    review.
                  </p>
                )}
              </FormControl>
              {currentUser && (
                <>
                  <FormControl fullWidth>
                    <FormLabel>Comment:</FormLabel>
                    <TextareaAutosize
                      minRows={3}
                      disabled={!currentUser}
                      {...register("comment", {
                        required: {
                          value: true,
                          message:
                            "Comment field is required — let others know what you think!",
                        },
                      })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "0.2px solid grey",
                        borderRadius: "5px",
                        backgroundColor: !currentUser ? "#f0f0f0" : "white",
                        color: !currentUser ? "#999" : "black",
                        cursor: !currentUser ? "not-allowed" : "text",
                      }}
                    ></TextareaAutosize>
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.comment?.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ py: 2 }} required>
                    <FormLabel>Rating:</FormLabel>
                    <Controller
                      control={control}
                      name="rating"
                      defaultValue={0}
                      render={({ field }) => {
                        return (
                          <Rating
                            {...field}
                            value={field.value}
                            onChange={(_, newValue) => field.onChange(newValue)}
                            icon={<StarRounded color="green"></StarRounded>}
                            emptyIcon={<StarBorderRounded fontSize="inherit" />}
                            readOnly={!currentUser}
                          ></Rating>
                        );
                      }}
                    ></Controller>
                  </FormControl>
                </>
              )}
            </Box>
          )}
        </CardContent>
        <CardActions>
          {leaveCommentIsOpen ? (
            <>
              <Button
                onClick={() => setLeaveCommentIsOpen(!leaveCommentIsOpen)}
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#F87171",
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  textTransform: "capitalize",
                }}
              >
                Close Review
              </Button>
              {currentUser && (
                <Button
                  onClick={handleSubmit(saveComment)}
                  disabled={!currentUser}
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#34D399",
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  Save Review
                </Button>
              )}
            </>
          ) : (
            <Button
              onClick={() => setLeaveCommentIsOpen(!leaveCommentIsOpen)}
              disabled
              title={!currentUser ? "You can't leave a comment" : undefined}
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#34D399",
                fontFamily: "Poppins",
                fontSize: "10px",
                textTransform: "capitalize",
              }}
            >
              Add Review
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default OveralRating;
