export const ProfilePicBubble = ({ styleOptions }) => {
    styleOptions += ' profile-pic-container'

    return (
        <div className={styleOptions}>
            {/* <img
                            className='profile-pic'
                            src='https://pbs.twimg.com/profile_images/1506072421002104842/9GVCifCE_normal.jpg' /> */}
            <div className='profile-pic'></div>
        </div>
    )
}