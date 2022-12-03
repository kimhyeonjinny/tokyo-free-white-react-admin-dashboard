import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: 'https://bucket-rj7vor.s3.ap-northeast-2.amazonaws.com/20221129_232719.png'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          안녕하세요 팝콘트렌드입니다.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
