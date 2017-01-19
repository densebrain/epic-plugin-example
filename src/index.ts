
export * from "./EpicSamplePlugin"

import EpicPlugin,{Electron,getIssueActions} from 'epic-plugin-env'

CommandRegistryScope.Register({
	id: 'TestPluginCommand',
	type: CommandType.App,
	name: "Test Plugin Command",
	defaultAccelerator: "CommandOrControl+n",
	execute: (cmd, event) => {
		const
			{remote} = Electron,
			{dialog,getCurrentWindow} = remote
		
		dialog.showMessageBox(getCurrentWindow(),{type: 'info',message: 'test dialog',buttons: ['ok']})
	}
})