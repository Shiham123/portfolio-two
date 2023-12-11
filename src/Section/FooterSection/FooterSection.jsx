import { useState } from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

const FooterSection = () => {
  const [color, setColor] = useState('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        bgcolor: color === '#edf9fe' ? '#001c55' : undefined,
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        borderRadius: 'lg',
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography level="h2">Shiham Bin Yousuf</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          This portfolio create with react and tailwind
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button sx={{ minWidth: 120 }}>DownLoad CV</Button>
          <Button
            variant="plain"
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={{
              '&:hover': { '--Button-gap': '0.625rem' },
              '& span': { transition: '0.15s' },
            }}
          >
            Want to see the source code
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
        sx={{ position: 'absolute', height: '100%', top: 0, right: 0 }}
      />
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          borderRadius: '50%',
        }}
        onClick={() => {
          const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
    </Sheet>
  );
};

export default FooterSection;
