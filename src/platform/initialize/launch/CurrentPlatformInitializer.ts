import LaunchInitializer from '@/app/base/initialize/LaunchInitializer';
import app from '@/app/App';
import AppContext from '@/app/base/context/AppContext';
import WriteExtendStore from '@/views/component/chat/extend/WriteExtendStore';
import Platform from '@/app/common/util/Platform';
import WriteExtendType from '@/views/component/chat/extend/WriteExtendType';
import DefineExtendStore from '@/app/define/extend/DefineExtendStore';
import FileDownloadDefineData from '@/app/com/client/module/file/FileDownloadDefineData';
import WebFileDownloadImpl from '@/platform/common/web/impl/WebFileDownloadImpl';

export default class CurrentPlatformInitializer extends LaunchInitializer {

    public getOrder(): number {
        return 0;
    }

    public initialize(): void {
        this.initializeHandle(this.appContext);
    }

    public getKey(): string {
        const own: object = this;
        return own.constructor.name;
    }

    public initializeHandle(appContext: AppContext): void {
        this.initializeChat(appContext);
    }

    public initializeChat(appContext: AppContext) {
        const fileDownloadDefineData: FileDownloadDefineData = app.appContext.getMaterial(FileDownloadDefineData);
        const fileDownload: WebFileDownloadImpl = appContext.getMaterial(WebFileDownloadImpl);
        // const fileDownload: WebFileDownloadImpl = appContext.getMaterial(WebFileDownloadImpl);
        const defineExtendStore: DefineExtendStore = appContext.getMaterial(DefineExtendStore);
        defineExtendStore.put(fileDownloadDefineData.getKey(), fileDownload);
    }
}
