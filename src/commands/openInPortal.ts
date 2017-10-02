/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as opn from 'opn';
import { INode } from '../nodes/INode';

export function openInPortal(node?: INode): void {
    if (node && node.tenantId) {
        (<(s: string) => void>opn)(`https://portal.azure.com/${node.tenantId}/#resource${node.id}`);
    }
}
