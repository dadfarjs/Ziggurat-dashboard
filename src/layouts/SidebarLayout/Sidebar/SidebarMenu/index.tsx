import { useContext } from 'react'

import { Button, List, ListItem, ListSubheader } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'
import { SidebarContext } from 'src/contexts/SidebarContext'

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone'
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone'
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone'
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone'
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone'
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone'
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone'
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone'
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone'
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone'
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone'
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone'
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone'
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone'
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone'
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone'
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone'
import { MenuWrapper, SubMenuWrapper } from './styled'

function SidebarMenu() {
    const { closeSidebar } = useContext(SidebarContext)

    return (
        <MenuWrapper>
            <List component="div">
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/overview"
                                startIcon={<DesignServicesTwoToneIcon />}
                            >
                                Overview
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div" disableSticky>
                        Dashboards
                    </ListSubheader>
                }
            >
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/dashboards/crypto"
                                startIcon={<BrightnessLowTwoToneIcon />}
                            >
                                Cryptocurrency
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/dashboards/messenger"
                                startIcon={<MmsTwoToneIcon />}
                            >
                                Messenger
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div" disableSticky>
                        Management
                    </ListSubheader>
                }
            >
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/management/transactions"
                                startIcon={<TableChartTwoToneIcon />}
                            >
                                Transactions List
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div" disableSticky>
                        Accounts
                    </ListSubheader>
                }
            >
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/management/profile/details"
                                startIcon={<AccountCircleTwoToneIcon />}
                            >
                                User Profile
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/management/profile/settings"
                                startIcon={<DisplaySettingsTwoToneIcon />}
                            >
                                Account Settings
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div" disableSticky>
                        Components
                    </ListSubheader>
                }
            >
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/buttons"
                                startIcon={<BallotTwoToneIcon />}
                            >
                                Buttons
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/modals"
                                startIcon={<BeachAccessTwoToneIcon />}
                            >
                                Modals
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/accordions"
                                startIcon={<EmojiEventsTwoToneIcon />}
                            >
                                Accordions
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/tabs"
                                startIcon={<FilterVintageTwoToneIcon />}
                            >
                                Tabs
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/badges"
                                startIcon={<HowToVoteTwoToneIcon />}
                            >
                                Badges
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/tooltips"
                                startIcon={<LocalPharmacyTwoToneIcon />}
                            >
                                Tooltips
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/avatars"
                                startIcon={<RedeemTwoToneIcon />}
                            >
                                Avatars
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/cards"
                                startIcon={<SettingsTwoToneIcon />}
                            >
                                Cards
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/components/forms"
                                startIcon={<TrafficTwoToneIcon />}
                            >
                                Forms
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div" disableSticky>
                        Extra Pages
                    </ListSubheader>
                }
            >
                <SubMenuWrapper>
                    <List component="div">
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/status/404"
                                startIcon={<CheckBoxTwoToneIcon />}
                            >
                                Error 404
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/status/500"
                                startIcon={<CameraFrontTwoToneIcon />}
                            >
                                Error 500
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/status/coming-soon"
                                startIcon={<ChromeReaderModeTwoToneIcon />}
                            >
                                Coming Soon
                            </Button>
                        </ListItem>
                        <ListItem component="div">
                            <Button
                                disableRipple
                                component={RouterLink}
                                onClick={closeSidebar}
                                to="/status/maintenance"
                                startIcon={<WorkspacePremiumTwoToneIcon />}
                            >
                                Maintenance
                            </Button>
                        </ListItem>
                    </List>
                </SubMenuWrapper>
            </List>
        </MenuWrapper>
    )
}

export default SidebarMenu
