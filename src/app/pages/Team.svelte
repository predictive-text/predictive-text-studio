<script lang="ts">
  import { _ } from "svelte-i18n";
  import TeamMemberProfile from "../components/TeamMemberProfile.svelte";

  const coreMaintainerGithubUserNames: string[] = ["eddieantonio"];
  const teamMemberGithubUserNames: string[] = [
    "ChrisChrisLoLo",
    "yehee",
    "zprobs",
    "Xuechunqiu",
    "IanSeng",
    "pranavnarang",
    "jienius",
  ];
</script>

<style>
  .team-page {
    width: 75%;
    margin: auto;
    margin-top: 1.5em;
  }

  .profile-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<main>
  <article class="team-page">
    <nav style="text-align: center">
      <a href="/" class="button button--blue">{$_('common.back')}</a>
    </nav>
    <header class="masthead">
      <h2>{$_('page.team.title')}</h2>
      <p>{$_('page.team.intro')}</p>
    </header>
    <section class="explanation" id="explanation">
      <h2>{$_('page.team.core_maintainers')}</h2>
      <div class="profile-container">
        {#each coreMaintainerGithubUserNames as githubUserName}
          <TeamMemberProfile {githubUserName} />
        {/each}
      </div>
    </section>

    <section class="quick-start" id="get-started">
      <h2>{$_('page.team.team_members')}</h2>
      <div class="profile-container">
        {#each teamMemberGithubUserNames as githubUserName}
          <TeamMemberProfile {githubUserName} />
        {/each}
      </div>
    </section>
  </article>
</main>
