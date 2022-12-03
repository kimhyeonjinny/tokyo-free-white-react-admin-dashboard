import {
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';



function AccountBalance() {
  return (
    <Card>
      <Grid spacing={0} container>
        <Box p={4}>
          <img src ='https://bucket-rj7vor.s3.ap-northeast-2.amazonaws.com/%ED%99%98%EC%8A%B9%EC%97%B0%EC%95%A0.png'
              width='300'
              height='450' />
        </Box>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              티빙
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                환승연애
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                출시일:2022.00.00 <br/>
                제작:이범성 <br/>
                출연:이나연,희두,헝거,해은... <br/>
                소개:
                환승연애하는 사람들의 이야기입니다.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
