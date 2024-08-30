<script>
    import { invoke } from '@tauri-apps/api/core';

    let name = $state('');
    let greeting = $state('');

    async function greet() {
        greeting = await invoke('greet', { name });
    }
</script>

<div>
    <input bind:value={name} id="greet-input" placeholder="Enter you name..." />
    <button onclick={greet}>Greet</button>
    <p>{greeting}</p>
</div>
