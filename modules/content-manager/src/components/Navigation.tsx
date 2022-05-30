import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import ExtensionIcon from '@mui/icons-material/Extension';
import LayersIcon from '@mui/icons-material/Layers';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Content" />
    </ListItem>
    <ListItem button component={Link} to="/taxonomies">
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Taxonomies" />
    </ListItem>
  </div>
);
