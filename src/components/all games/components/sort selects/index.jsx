export const SortSelect = ({ handlePlatformChange, handleGenreChange, handleTagChange }) => {
    return(
        <div>
            <select onChange={(event) => {handlePlatformChange(event.target.value)}}>
                <option value="pc">Pc</option>
                <option value="browser">Browser</option>
                <option value="all">All</option>
            </select>
            <select onChange={(event) => {handleGenreChange(event.target.value)}}>
                <option value="mmorpg">MMORPG</option>
                <option value="shooter">Shooter</option>
                <option value="strategy">Strategy</option>
                <option value="moba">MOBA</option>
                <option value="racing">Racing</option>
                <option value="sports">Sports</option>
                <option value="social">Social</option>
                <option value="sandbox">Sandbox</option>
                <option value="open-world">Open World</option>
                <option value="survival">Survival</option>
                <option value="pvp">PvP</option>
                <option value="pve">PvE</option>
                <option value="pixel">Pixel</option>
                <option value="voxel">Voxel</option>
                <option value="zombie">Zombie</option>
                <option value="turn-based">Turn-Based</option>
                <option value="first-person">First-Person</option>
                <option value="third-Person">Third-Person</option>
                <option value="top-down">Top-Down</option>
                <option value="tank">Tank</option>
                <option value="space">Space</option>
                <option value="sailing">Sailing</option>
                <option value="side-scroller">Side-Scroller</option>
                <option value="superhero">Superhero</option>
                <option value="permadeath">Permadeath</option>
                <option value="card">Card</option>
                <option value="battle-royale">Battle Royale</option>
                <option value="mmo">MMO</option>
                <option value="mmofps">MMOFPS</option>
                <option value="mmotps">MMOTPS</option>
                <option value="3d">3D</option>
                <option value="2d">2D</option>
                <option value="anime">Anime</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="fighting">Fighting</option>
                <option value="action-rpg">Action RPG</option>
                <option value="action">Action</option>
                <option value="military">Military</option>
                <option value="martial-arts">Martial Arts</option>
                <option value="flight">Flight</option>
                <option value="low-spec">Low-Spec</option>
                <option value="tower-defense">Tower Defense</option>
                <option value="horror">Horror</option>
                <option value="mmorts">MMORTS</option>
            </select>
            <select onChange={(event) => {handleTagChange(event.target.value)}}>
                <option value="release-date">Release-date</option>
                <option value="popularity">Popularity</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="relevance">Relevance</option>
            </select>
        </div>
    )
}